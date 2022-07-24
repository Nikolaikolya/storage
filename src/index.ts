import factory from "./modules/storage";
import { SessionStorage } from "./modules/storage/engines/session-storage";

const localStorage = factory('test', { engine: new SessionStorage() });