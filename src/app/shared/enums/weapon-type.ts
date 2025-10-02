export const WeaponType = {
    greatsword: "greatsword",
    swordShield: "swordShield",
    dualBlades: "dualBlades",
    longsword: "longsword",
    hammer: "hammer",
    huntingHorn: "huntingHorn",
    lance: "lance",
    gunlance: "gunlance",
    switchAxe: "switchAxe",
    chargeBlade: "chargeBlade",
    insectGlaive: "insectGlaive",
    bow: "bow",
    lightBowgun: "lightBowgun",
    heavyBowgun: "heavyBowgun"
} as const;

export type WeaponType = typeof WeaponType[keyof typeof WeaponType];