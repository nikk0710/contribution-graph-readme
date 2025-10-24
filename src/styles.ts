import type { ContributionData as CDType, GraphOptions as GOType } from './types';
export type CSSProperties = { [key: string]: string | number };

export const defaultStyles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    gap: 8
  },
  cell: {
    width: 12,
    height: 12,
    borderRadius: 2
  }
};

export const graphContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%',
    backgroundColor: '#f9f9f9',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

export const graphStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
};

export const tooltipStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: 10,
};

export interface ContributionData {
  date: string;   // YYYY-MM-DD
  count: number;
}

export interface GraphOptions {
  width?: number;
  height?: number;
  cellSize?: number;
  theme?: 'default' | 'dark' | string;
}