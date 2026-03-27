export function generatePixCode(): string {
  // Simulated PIX QR Code generation
  // In production, use a real PIX integration
  return '00020126580014br.gov.bcb.pix0136' + Math.random().toString().slice(2, 38) + '520400005303986540551.005802BR5913IMPOSTORES6009SAOPAULO62410503***63041D3D';
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function calculateTotal(items: any[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function generateOrderId(): string {
  return `IMP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}
