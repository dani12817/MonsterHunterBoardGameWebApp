export const MaterialType = {
    mineral: "mineral",
    bone: "bone",
    claw: "claw",
    sac: "sac",
    gem: "gem",
    potion: "potion",
    hide: "hide",
    wing: "wing",
    scale: "scale",
    shell: "shell",
    tail: "tail",
    head: "head",
    mud: "mud",
    other: "other",
    plate: "plate"
} as const;

export type MaterialType = typeof MaterialType[keyof typeof MaterialType];