document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('[data-target]');
    const pages = document.querySelectorAll('.page');
    const mascote = document.getElementById('mascote-egg');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.getElementById('nav-links');

    // 1. NAVEGAÇÃO SPA
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('data-target');
            
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            const activeNav = document.querySelector(`.nav-item[data-target="${targetId}"]`);
            if (activeNav) activeNav.classList.add('active');

            if (targetId === 'acao-social') {
                animateCounters();
            }

            if (window.innerWidth <= 768 && navLinksContainer) {
                navLinksContainer.classList.remove('active');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. MENU MOBILE TOGGLE
    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // 3. CONTADORES (EFEITO WALL STREET)
    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const update = () => {
                const speed = target / 100;
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count);
                    setTimeout(update, 15);
                } else { 
                    counter.innerText = target; 
                }
            };
            update();
        });
    }

    // 4. EASTER EGG (PIADAS CONTÁBEIS)
    const piadas = [
        "Auditamos seu clique: detectado excesso de curiosidade! 📊",
        "Cuidado! Muitos cliques geram passivo circulante de tempo! 💸",
        "Ativo Imobilizado: o Pato não sai do lugar, mas você insiste! 🦆",
        "Débito de cliques, crédito de risadas! ⚖️",
        "Equilibrando o balanço patrimonial de diversão! 📈"
    ];
    if(mascote) {
        mascote.addEventListener('click', () => {
            alert(piadas[Math.floor(Math.random() * piadas.length)]);
        });
    }

    // 5. CALENDÁRIO DE EVENTOS (AUTOMATIZADO VIA JSON)
    // Deixamos os eventos atuais como "padrão", mas a função carregarEventos() vai tentar puxar os novos
    let eventosAgenda = [
        { 
            data: '2026-09-27', 
            tipo: 'INTEGRAÇÃO', 
            titulo: 'Supertenda', 
            desc: 'A integração máxima das atléticas. A Impostores em peso no campo!',
            link: '' 
        },
        { 
            data: '2026-10-25', 
            tipo: 'FESTA EXTERNA', 
            titulo: 'UFPR: Circo dos Horrores', 
            desc: 'Garanta seu ingresso na Cheers com o cupom IMPOSTORES.',
            link: 'https://cheers.com.br/evento/ufpr-in-rio-circo-dos-horrores-25594' 
        },
        { 
            data: '2026-11-20', 
            tipo: 'MEGA EVENTO', 
            titulo: 'POUPA UNI 2K26 (Início)', 
            desc: 'O maior evento do ano começou! Florianópolis vai ficar pequena.',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdDY_gnQ9bwTQolVPV2v2rTVPhNqLPDz9KJp9Aqc37-a0gt6g/viewform' 
        },
        { 
            data: '2026-04-12', 
            tipo: 'AÇÃO SOCIAL', 
            titulo: 'Páscoa Solidária - Arrecadação', 
            desc: 'Último dia para comprar rifas e garantir horas complementares.',
            link: 'https://wa.me/5541995108205' 
        }
    ];

    async function carregarEventos() {
        try {
            const response = await fetch('eventos.json');
            if (response.ok) {
                eventosAgenda = await response.json();
            }
            renderCalendar(currentDate);
        } catch (error) {
            console.error("Erro ao carregar eventos:", error);
            renderCalendar(currentDate); // Mostra os eventos padrão se o JSON falhar
        }
    }

    let currentDate = new Date(2026, 8, 1); 
    
    const monthYearText = document.getElementById('month-year');
    const calendarDays = document.getElementById('calendar-days');
    const eventPlaceholder = document.getElementById('event-placeholder');
    const eventContent = document.getElementById('event-content');
    const eventType = document.getElementById('event-type-badge');
    const eventTitle = document.getElementById('event-detail-title');
    const eventDesc = document.getElementById('event-detail-desc');
    const eventLink = document.getElementById('event-detail-link');

    function renderCalendar(date) {
        if (!calendarDays) return;
        calendarDays.innerHTML = '';
        
        if(eventPlaceholder) eventPlaceholder.style.display = 'block';
        if(eventContent) eventContent.style.display = 'none';

        const month = date.getMonth();
        const year = date.getFullYear();
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        
        if(monthYearText) monthYearText.innerText = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('cal-day', 'empty');
            calendarDays.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('cal-day');
            dayDiv.innerText = i;

            const currentDayString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            const eventForDay = eventosAgenda.find(e => e.data === currentDayString);
            if (eventForDay) {
                dayDiv.classList.add('has-event');
                dayDiv.addEventListener('click', () => {
                    document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('active-event'));
                    dayDiv.classList.add('active-event');
                    
                    if(eventPlaceholder) eventPlaceholder.style.display = 'none';
                    if(eventContent) eventContent.style.display = 'block';
                    
                    if(eventType) eventType.innerText = eventForDay.tipo;
                    if(eventTitle) eventTitle.innerText = eventForDay.titulo;
                    if(eventDesc) eventDesc.innerText = eventForDay.desc;
                    
                    if(eventLink) {
                        if (eventForDay.link !== '') {
                            eventLink.href = eventForDay.link;
                            eventLink.style.display = 'block';
                        } else {
                            eventLink.style.display = 'none';
                        }
                    }
                });
            }
            calendarDays.appendChild(dayDiv);
        }
    }

    if(document.getElementById('prev-month')) {
        document.getElementById('prev-month').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        // INICIALIZAÇÃO: Busca no arquivo JSON do bot
        carregarEventos();
    }
});