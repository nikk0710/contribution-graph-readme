export interface ContributionData {
  date: string;    // ISO date YYYY-MM-DD
  count: number;
  // เพิ่มฟิลด์อื่น ๆ ถ้าจำเป็น เช่น color, type ฯล.
}

export interface GraphOptions {
  width?: number;
  height?: number;
  cellSize?: number;
  theme?: 'default' | 'dark' | string;
  // เพิ่ม option อื่น ๆ ที่ renderer ต้องการ
}