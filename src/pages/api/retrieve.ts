import type { NextApiRequest, NextApiResponse } from "next";
import {
  ICommonResponse,
  IPageListDto,
} from "src/repository/base/base.interface";
import { IToDoDto } from "src/repository/mainRepository/main.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICommonResponse<IPageListDto<IToDoDto>>>
) {
  res.status(200).json({
    ok: true,
    data: {
      list: [
        { id: 1, name: "Test", content: "This Is A Test Response" },
        { id: 2, name: "Test", content: "This Is A Test Response" },
      ],
      paginate: { limit: 10, offset: 0, total: 1 },
    },
  });
}
