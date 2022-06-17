import type { NextApiRequest, NextApiResponse } from "next";
import { ICommonResponse } from "src/repository/base/base.interface";
import { IUserDto } from "src/repository/commonRepository/common.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICommonResponse<IUserDto>>
) {
  res.status(200).json({
    ok: true,
    data: { userId: "jhnam", language: "kr", authorizationKey: "Testing" },
  });
}
