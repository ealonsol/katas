export function abbrevName(name: string): string {
    return name.substring(0, 1).toUpperCase() + "." + name.substr(name.indexOf(" ") + 1, 1).toUpperCase();
}
