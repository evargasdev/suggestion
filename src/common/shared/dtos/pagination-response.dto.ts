export class PaginationResponseDto<T> {
  data!: T[];
  total!: number;
  offset!: number;
  limit!: number;
}
