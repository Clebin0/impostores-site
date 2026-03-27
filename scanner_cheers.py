import json
import asyncio
from playwright.async_api import async_playwright

CHEERS_URL = "https://cheers.com.br/eventos"

async def scan_cheers_events():
    async with async_playwright() as p:
        # Mantemos o disfarce de Humano para não sermos bloqueados
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        )
        page = await context.new_page()

        eventos_curitiba = {} 

        # A NOSSA ARMA DEFINITIVA: Lê a API nativa
        async def escutar_rede(response):
            if "application/json" in response.headers.get("content-type", "") and response.status == 200:
                try:
                    dados = await response.json()
                    
                    # Verifica se o pacote de dados é a famosa lista de eventos
                    if "eventos" in dados and isinstance(dados["eventos"], list):
                        print("🔥 BINGO! Pacote de eventos interceptado da base de dados...")
                        
                        for evento in dados["eventos"]:
                            cidade = evento.get("cidade", "")
                            
                            # Filtro Exclusivo da Diretoria: Apenas Curitiba!
                            if cidade and "curitiba" in cidade.lower():
                                titulo = evento.get("titulo", "Evento Desconhecido").strip()
                                slug = evento.get("slug", "")
                                
                                # A data vem como "2026-03-23T08:00:11". Cortamos pelo "T" para ficar só com "YYYY-MM-DD"
                                data_raw = evento.get("data", "2026-01-01T00:00:00")
                                data_formatada = data_raw.split("T")[0] 
                                
                                link_completo = f"https://cheers.com.br/evento/{slug}"
                                
                                # Guardamos no nosso cofre
                                if link_completo not in eventos_curitiba:
                                    eventos_curitiba[link_completo] = {
                                        "data": data_formatada,
                                        "tipo": "CHEERS - CWB",
                                        "titulo": titulo,
                                        "desc": "Evento oficial em Curitiba detetado via Cheers.",
                                        "link": link_completo
                                    }
                except Exception as e:
                    pass

        # Ativa o escutão na página antes mesmo de ela abrir
        page.on("response", escutar_rede)
        
        print(f"🕵️ Entrando furtivamente na Cheers...")
        await page.goto(CHEERS_URL, wait_until="domcontentloaded")
        
        print("⏳ Aspirando a API: Descendo a página para o servidor nos enviar todos os eventos...")
        # Desce a página várias vezes para o Infinite Scroll puxar o resto do Brasil
        for _ in range(25):
            await page.mouse.wheel(0, 1000)
            await page.wait_for_timeout(600)

        # Remove o escutão 
        page.remove_listener("response", escutar_rede)

        # Converte o dicionário para a lista final do seu site
        lista_final = list(eventos_curitiba.values())

        if lista_final:
            with open('eventos.json', 'w', encoding='utf-8') as f:
                json.dump(lista_final, f, ensure_ascii=False, indent=4)
            print(f"\n✅ VITÓRIA ABSOLUTA! O Bot extraiu {len(lista_final)} eventos de Curitiba diretamente da Fonte.")
            for e in lista_final:
                 print(f"  📍 {e['titulo']} ({e['data']})")
        else:
            print("\n⚠️ A API não enviou eventos novos para Curitiba.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(scan_cheers_events())