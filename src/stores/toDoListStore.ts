import {
  IToDoDto,
  ISearchPayload,
} from "src/repository/mainRepository/main.interface";
import { IPageListDto } from "src/repository/base/base.interface";
import { mainRepository } from "src/repository/mainRepository";
import { makeAutoObservable } from "mobx";

class ToDoListStore {
  constructor() {
    makeAutoObservable(this);
  }

  prevSearchForm: ISearchPayload = {
    paginate: {
      offset: 0,
      limit: 20,
    },
  };
  setPrevSearchForm(value: ISearchPayload) {
    this.prevSearchForm = value;
  }

  toDoList: IPageListDto<IToDoDto> = {};
  setToDoList(value: IPageListDto<IToDoDto>) {
    this.toDoList = value;
  }

  async retrieve(params = this.prevSearchForm) {
    this.setToDoList({});
    try {
      const { data } = await mainRepository.retrieve(params);
      if (data) {
        this.setToDoList(data.data);
        this.setPrevSearchForm(params);
      }
    } catch (e) {
      alert(e.message);
      this.setToDoList({
        list: [],
        paginate: { total: 0, offset: 0, limit: 20 },
      });
    }
  }
}

/**
 * Stores to-do information
 */
export const toDoListStore = new ToDoListStore();
