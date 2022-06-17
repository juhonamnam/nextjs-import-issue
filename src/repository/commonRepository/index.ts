import { BaseRepository } from "../base/baseRepository";
import { IAxiosCommonResponse } from "../base/base.interface";
import { IUserDto } from "./common.interface";

class CommonRepository extends BaseRepository {
  getUserInfomation(): IAxiosCommonResponse<IUserDto> {
    return this.request({
      method: "GET",
      url: "/api/user",
    });
  }
}

/**
 * Repository used for common purposes
 */
export const commonRepository = new CommonRepository();
