export function loadFavoriteGroups(): Set<string> {
  if (typeof localStorage !== "undefined") {
    const val = localStorage.getItem("favoriteGroups");
    if (val) {
      return decodeFavoriteGroups(val);
    }
  }
  return new Set();
}

export function saveFavoriteGroups(favoriteGroups: Set<string>): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("favoriteGroups", encodeFavoriteGroups(favoriteGroups));
  }
}

export function encodeFavoriteGroups(val: Set<string>): string {
  return [...val].join(",");
}

export function decodeFavoriteGroups(val: string): Set<string> {
  return new Set(val.split(","));
}
