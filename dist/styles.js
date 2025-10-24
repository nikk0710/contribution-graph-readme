"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipStyle = exports.graphStyle = exports.graphContainerStyle = exports.defaultStyles = void 0;
exports.defaultStyles = {
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
exports.graphContainerStyle = {
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
exports.graphStyle = {
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
};
exports.tooltipStyle = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    zIndex: 10,
};
