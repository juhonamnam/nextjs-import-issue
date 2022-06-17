import { IToDoDto, ISearchPayload } from "./main.interface";
import { IAxiosCommonResponse, IPageListDto } from "../base/base.interface";

import { BaseRepository } from "../base/baseRepository";

class MainRepository extends BaseRepository {
  retrieve(
    payload: ISearchPayload
  ): IAxiosCommonResponse<IPageListDto<IToDoDto>> {
    return this.request({
      method: "GET",
      url: "/api/retrieve",
      params: { accountApi: JSON.stringify(payload) },
    });
  }
}

/**
 * Repository to request for to-do information
 */
export const mainRepository = new MainRepository();
