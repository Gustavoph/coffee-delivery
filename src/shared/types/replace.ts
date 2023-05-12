/**
 * Replaces the property definitions from a given type
 * @example
 * ```typescript
 * type Post {
 *  id: string;
 *  name: string;
 * }
 *
 * Replace<Post, { id: number }>
 * ```
 * */
// eslint-disable-next-line no-unused-vars
export type Replace<T, R extends { [K in keyof T]?: unknown }> = Omit<
  T,
  keyof R
> &
  R
