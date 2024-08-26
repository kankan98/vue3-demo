/*
 * @Author: dengkui
 * @Date: 2023-01-05 10:24:17
 * @LastEditors: dengkui
 * @LastEditTime: 2023-01-05 10:39:31
 * @FilePath: \节能\src\components\kkPagination\types.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by dengkui, All Rights Reserved. 
 */
export interface pageQueryType {
  currentPage: number;
  pageSize: number;

}

export interface paginationType extends pageQueryType {
  totalCount: number;
}