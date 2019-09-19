import { inject, decorate } from "inversify";

import { TYPES } from "./types";
import { container } from "../../infrastructure/utils/ioc_container";
import { EventDispatcher } from "event-dispatch";

export const dbClient = inject(TYPES.DbClient);
export const movieRepository = inject(TYPES.MovieRepository);
export const actorRepository = inject(TYPES.ActorRepository);
export const directorRepository = inject(TYPES.DirectorRepository);
export const userRepository = inject(TYPES.UserRepository);

export const autService = inject(TYPES.AuthService);
export const loggerService = inject(TYPES.LoggerService);
export const mailService = inject(TYPES.MailService);
export const searchService = inject(TYPES.SearchService);

export const eventDispatcher = () => {
    return (
        target: any,
        targetKey: string,
        index?: number | undefined
    ): void => {
        decorate(target, targetKey, index);
        container
            .bind<EventDispatcher>(TYPES.EventDispatcher)
            .toService(EventDispatcher);
    };
};
