"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
class PlantService {
    constructor() {
        this.plantsFile = path_1.default.join(__dirname, '..', 'models', 'database', 'plantsData.json');
        this.opsFile = path_1.default.join(__dirname, '..', 'models', 'database', 'opsInfo.json');
    }
    updateOpsInfo(incrementAmount = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataRaw = yield promises_1.default.readFile(this.opsFile, { encoding: 'utf8' });
            const opsInfo = JSON.parse(dataRaw);
            opsInfo.createdPlants += incrementAmount;
            yield promises_1.default.writeFile(this.opsFile, JSON.stringify(opsInfo, null, 2));
            return opsInfo.createdPlants;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataRaw = yield promises_1.default.readFile(this.plantsFile, { encoding: 'utf8' });
            const plants = JSON.parse(dataRaw);
            return plants;
        });
    }
    create(plant) {
        return __awaiter(this, void 0, void 0, function* () {
            const { breed, needsSun, origin, size, } = plant;
            if (typeof breed !== 'string') {
                throw new HttpException_1.default(400, 'Attribute "breed" must be string.');
            }
            if (typeof needsSun !== 'boolean') {
                throw new HttpException_1.default(400, 'Attribute "needsSun" must be boolean.');
            }
            if (typeof origin !== 'string') {
                throw new HttpException_1.default(400, 'Attribute "origin" must be string.');
            }
            if (typeof size !== 'number') {
                throw new HttpException_1.default(400, 'Attribute "size" must be number.');
            }
            const waterFrequency = needsSun
                ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
                : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
            const dataRaw = yield promises_1.default.readFile(this.plantsFile, { encoding: 'utf8' });
            const plants = JSON.parse(dataRaw);
            const newPlantId = yield this.updateOpsInfo(1);
            const newPlant = Object.assign(Object.assign({ id: newPlantId }, plant), { waterFrequency });
            plants.push(newPlant);
            yield promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
            return newPlant;
        });
    }
}
exports.default = PlantService;
