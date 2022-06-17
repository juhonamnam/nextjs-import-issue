import { makeAutoObservable } from "mobx";
import { commonRepository } from "src/repository/commonRepository";
import { IUserDto } from "src/repository/commonRepository/common.interface";

class ApplicationStore {
  constructor() {
    makeAutoObservable(this);
  }

  userInfo: IUserDto = null;

  setUserDto(value: IUserDto) {
    this.userInfo = value;
  }

  async getUserInfomation() {
    try {
      const { data } = await commonRepository.getUserInfomation();
      if (data) {
        this.setUserDto(data.data);
        return data.data;
      }
    } catch (e) {
      alert(e.message);
      this.setUserDto(null);
    }
  }
}

/**
 * Stores user information
 */
export const applicationStore = new ApplicationStore();
