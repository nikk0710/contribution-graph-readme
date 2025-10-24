"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGraph = void 0;
function renderGraph(data, options = {}) {
    var _a, _b;
    const width = (_a = options.width) !== null && _a !== void 0 ? _a : 80;
    const height = (_b = options.height) !== null && _b !== void 0 ? _b : 10;
    const lines = data.map(d => {
        const count = Math.min(d.count, height);
        return `${d.date}: ${'■'.repeat(count)}`;
    });
    return lines.join('\n');
}
exports.renderGraph = renderGraph;
