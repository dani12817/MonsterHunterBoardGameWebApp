export const MaterialCategory = {
    mineral: "mineral",
    bone: "bone",
    sac: "sac",
    greatJagras: "greatJagras",
    barroth: "barroth",
    kuluYaKu: "kuluYaKu",
    tobiKadachi: "tobiKadachi",
    pukeiPukei: "pukeiPukei",
    tzitziYaKu: "tzitziYaKu",
    greatGirros: "greatGirros",
    anjanath: "anjanath",
    jyuratodus: "jyuratodus",
    radobaan: "radobaan",
    rathalos: "rathalos",
    rathalosAzure: "rathalosAzure",
    diablos: "diablos",
    diablosBlack: "diablosBlack",
    kushalaDaora: "kushalaDaora",
    teostra: "teostra",
    nergigante: "nergigante",
    kirin: "kirin",
    barioth: "barioth",
    rajang: "rajang",
    other: "other"
} as const;

export type MaterialCategory = typeof MaterialCategory[keyof typeof MaterialCategory];