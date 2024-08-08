"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create();
}
start();
//# sourceMappingURL=main.js.map