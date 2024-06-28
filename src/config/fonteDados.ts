import { DataSource } from "typeorm";
import PetEntity from "../entity/PetEntity.js";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [PetEntity],
    synchronize: true
});

// synchronize - Be careful with this option and don't use this in production - otherwise you can lose production data. This option is useful during debug and development

export default AppDataSource;