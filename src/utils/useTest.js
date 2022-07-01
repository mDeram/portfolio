const TEST = "b"; //"a" | "b"
export function useTest(a, b) {
    return TEST === "a" ? a : b;
}
