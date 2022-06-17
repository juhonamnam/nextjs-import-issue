import { fetcher } from "./fetcher";
import { applicationStore } from "src/stores/applicationStore";
import { IRequestConfig } from "./base.interface";

/**
 * Parent class for all repositories
 */
export class BaseRepository {
  protected request(config: IRequestConfig) {
    if (!config.headers) config.headers = {};
    config.headers["X-Auth-Id"] = applicationStore?.userInfo?.userId;
    config.headers["X-Auth-Key"] = applicationStore?.userInfo?.authorizationKey;
    config.headers["X-Locale"] = applicationStore?.userInfo?.language;

    return fetcher(config);
  }
}
