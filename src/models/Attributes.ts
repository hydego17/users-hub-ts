export class Attributes<T> {
  constructor(private data: T) {}

  // Receive key from e.g UserProps as a generic constraint
  // e.g get("id") -> UserProps['id'] = number
  // e.g get("name") -> UserProps['name'] = string
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
