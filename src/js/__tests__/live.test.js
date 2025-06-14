import  liveLine  from "../live";
test.each([
    ["health", {name: "Маг", health: 90}, "healthy"],
    ["health", {name: "Маг", health: 40}, "wounded"],
    ["health", {name: "Маг", health: 10}, "critical"]
])(
    "test live function ",(status, data, expected) => {
        const result = liveLine(data);
        expect(result).toBe(expected);
    }
);