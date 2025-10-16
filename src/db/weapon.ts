import { WeaponLocal } from "../app/models";
import { WeaponType, EquipmentTree } from "../app/shared/enums";

export const WEAPON_TABLE: Map<WeaponType, (WeaponLocal | undefined)[]> = new Map([
    [
        WeaponType.greatsword,
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 14, 18, 26, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 6, 8, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 2 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 43, amount: 2 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 18,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 2 },
                    { material: 79, amount: 4 },
                    { material: 81, amount: 3 }
                ],
                previous: 0,
                upgrade: [19]
            },
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 79, amount: 2 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 2 }
                ],
                previous: 18,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 24,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 25, amount: 2 },
                    { material: 83, amount: 3 },
                    { material: 86, amount: 2 }
                ],
                previous: 0,
                upgrade: [25]
            },
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 26, amount: 1 },
                    { material: 84, amount: 4 },
                    { material: 85, amount: 2 }
                ],
                previous: 24,
                upgrade: undefined
            },
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 2 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 1 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Rathalos Azure
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.swordShield, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 14, 18, 26, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 6, 8, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 2 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 3 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 1 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 18,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 2 },
                    { material: 79, amount: 4 },
                    { material: 81, amount: 3 }
                ],
                previous: 0,
                upgrade: [19]
            },
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 79, amount: 2 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 2 }
                ],
                previous: 18,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 24,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 25, amount: 2 },
                    { material: 83, amount: 3 },
                    { material: 86, amount: 2 }
                ],
                previous: 0,
                upgrade: [25]
            },
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 26, amount: 1 },
                    { material: 84, amount: 4 },
                    { material: 85, amount: 2 }
                ],
                previous: 24,
                upgrade: undefined
            },
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 1 },
                    { material: 92, amount: 2 },
                    { material: 96, amount: 1 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 2 },
                    { material: 91, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Rathalos Azure
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            undefined, undefined,
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.dualBlades, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 16, 34, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 12, 20, 22, 30, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 5, amount: 2 },
                    { material: 31, amount: 2 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 32, amount: 1 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            {
                id: 16,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 75, amount: 3 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 0,
                upgrade: [17]
            },
            {
                id: 17,
                name: EquipmentTree.tzitziYaKu,
                rarity: 4,
                materials: [
                    { material: 7, amount: 1 },
                    { material: 75, amount: 5 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 16,
                upgrade: undefined
            },
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 3 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 71, amount: 4 },
                    { material: 72, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 2 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.longsword, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 16, 26, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 12, 20, 22]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 65, amount: 2 },
                    { material: 66, amount: 3 },
                    { material: 68, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 65, amount: 1 },
                    { material: 66, amount: 1 },
                    { material: 68, amount: 3 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            {
                id: 16,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 75, amount: 3 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 0,
                upgrade: [17]
            },
            {
                id: 17,
                name: EquipmentTree.tzitziYaKu,
                rarity: 4,
                materials: [
                    { material: 7, amount: 1 },
                    { material: 75, amount: 5 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 16,
                upgrade: undefined
            },
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 3 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 28, amount: 2 },
                    { material: 71, amount: 2 },
                    { material: 72, amount: 2 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 2 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 1 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            undefined, undefined,
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            },
            // Kirin
            undefined, undefined
        ]
    ],
    [
        WeaponType.hammer, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 14, 18, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 8, 10, 20, 26, 30]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 4 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 2 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 3 },
                    { material: 51, amount: 2 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 3 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 18,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 2 },
                    { material: 79, amount: 4 },
                    { material: 81, amount: 3 }
                ],
                previous: 0,
                upgrade: [19]
            },
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 79, amount: 2 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 2 }
                ],
                previous: 18,
                upgrade: undefined
            },
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 3 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 70, amount: 2 },
                    { material: 72, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 24,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 25, amount: 2 },
                    { material: 83, amount: 3 },
                    { material: 86, amount: 2 }
                ],
                previous: 0,
                upgrade: [25]
            },
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 26, amount: 1 },
                    { material: 84, amount: 4 },
                    { material: 85, amount: 2 }
                ],
                previous: 24,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 3 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            },
            // Kirin
            undefined, undefined
        ]
    ],
    [
        WeaponType.huntingHorn, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 12, 14, 20, 22, 24, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 1, amount: 2 },
                    { material: 5, amount: 2 },
                    { material: 31, amount: 2 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 3, amount: 2 },
                    { material: 32, amount: 1 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 3 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 71, amount: 4 },
                    { material: 72, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            {
                id: 24,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 25, amount: 2 },
                    { material: 83, amount: 3 },
                    { material: 86, amount: 2 }
                ],
                previous: 0,
                upgrade: [25]
            },
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 26, amount: 1 },
                    { material: 84, amount: 4 },
                    { material: 85, amount: 2 }
                ],
                previous: 24,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            undefined, undefined,
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.lance, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 26, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 8, 12, 22, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 1, amount: 2 },
                    { material: 5, amount: 2 },
                    { material: 31, amount: 2 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 3, amount: 2 },
                    { material: 32, amount: 1 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 12, amount: 2 },
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.gunlance, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 22, 26, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 6, 8, 18]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 3 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 43, amount: 2 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 3 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 2 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 18,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 2 },
                    { material: 79, amount: 4 },
                    { material: 81, amount: 3 }
                ],
                previous: 0,
                upgrade: [19]
            },
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 79, amount: 2 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 2 }
                ],
                previous: 18,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 2 },
                    { material: 90, amount: 1 },
                    { material: 94, amount: 2 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            },
            // Kirin
            undefined, undefined
        ]
    ],
    [
        WeaponType.switchAxe, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 26, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 8, 20, 30, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            {
                id: 8,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 4 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [9]
            },
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 2 }
                ],
                previous: 8,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 1 },
                    { material: 71, amount: 2 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 71, amount: 4 },
                    { material: 73, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 1 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 2 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 2 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            undefined, undefined,
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.chargeBlade, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 22, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 6, 12, 18, 30]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 3 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 43, amount: 2 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 65, amount: 3 },
                    { material: 66, amount: 2 },
                    { material: 68, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 65, amount: 2 },
                    { material: 66, amount: 2 },
                    { material: 68, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 18,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 2 },
                    { material: 79, amount: 4 },
                    { material: 81, amount: 3 }
                ],
                previous: 0,
                upgrade: [19]
            },
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 79, amount: 2 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 2 }
                ],
                previous: 18,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 2 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            },
            // Kirin
            undefined, undefined
        ]
    ],
    [
        WeaponType.insectGlaive, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 14, 16, 26, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 20, 30, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            {
                id: 16,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 75, amount: 3 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 0,
                upgrade: [17]
            },
            {
                id: 17,
                name: EquipmentTree.tzitziYaKu,
                rarity: 4,
                materials: [
                    { material: 7, amount: 1 },
                    { material: 75, amount: 5 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 16,
                upgrade: undefined
            },
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 1 },
                    { material: 71, amount: 2 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 71, amount: 4 },
                    { material: 73, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 1 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 2 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 3 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.bow, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 10, 26, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 12, 14, 20, 30]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            undefined, undefined,
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            {
                id: 10,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 4, amount: 3 },
                    { material: 45, amount: 4 },
                    { material: 46, amount: 2 },
                    { material: 48, amount: 1 }
                ],
                previous: 0,
                upgrade: [11]
            },
            {
                id: 11,
                name: EquipmentTree.kuluYaKu,
                rarity: 4,
                materials: [
                    { material: 12, amount: 4 },
                    { material: 46, amount: 3 },
                    { material: 47, amount: 3 },
                    { material: 48, amount: 2 }
                ],
                previous: 10,
                upgrade: undefined
            },
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 5, amount: 2 },
                    { material: 31, amount: 1 },
                    { material: 68, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 65, amount: 2 },
                    { material: 66, amount: 2 },
                    { material: 68, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 20,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 27, amount: 1 },
                    { material: 70, amount: 3 },
                    { material: 72, amount: 2 }
                ],
                previous: 3,
                upgrade: [21]
            },
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 71, amount: 4 },
                    { material: 72, amount: 4 }
                ],
                previous: 20,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 1 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 2 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 2 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            },
            // Kirin
            undefined, undefined
        ]
    ],
    [
        WeaponType.lightBowgun, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 6, 26, 34, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 8, 22, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 3 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 43, amount: 2 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            {
                id: 12,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 55, amount: 3 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            {
                id: 22,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 60, amount: 3 },
                    { material: 61, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 3,
                upgrade: [23]
            },
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 4,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 37, amount: 1 },
                    { material: 60, amount: 2 },
                    { material: 62, amount: 2 },
                    { material: 64, amount: 1 }
                ],
                previous: 22,
                upgrade: undefined
            },
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 26,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 87, amount: 2 },
                    { material: 90, amount: 2 },
                    { material: 94, amount: 1 }
                ],
                previous: 0,
                upgrade: [27]
            },
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 87, amount: 2 },
                    { material: 89, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 95, amount: 1 }
                ],
                previous: 26,
                upgrade: undefined
            },
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 34,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 139, amount: 2 },
                    { material: 140, amount: 1 }
                ],
                previous: 0,
                upgrade: [35]
            },
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 138, amount: 4 },
                    { material: 140, amount: 3 },
                    { material: 141, amount: 1 }
                ],
                previous: 34,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.heavyBowgun, 
        [
            // Mineral
            {
                id: 0,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [1, 6, 14, 16, 36, 38]
            },
            {
                id: 1,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 0, amount: 1 },
                    { material: 1, amount: 1 },
                    { material: 15, amount: 1 }
                ],
                previous: 0,
                upgrade: [2]
            },
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 3,
                materials: [
                    { material: 1, amount: 3 },
                    { material: 2, amount: 2 },
                    { material: 3, amount: 2 },
                    { material: 6, amount: 2 }
                ],
                previous: 1,
                upgrade: undefined
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 1,
                materials: [
                    { material: 14, amount: 1 }
                ],
                previous: undefined,
                upgrade: [4, 12, 24, 30, 40]
            },
            {
                id: 4,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 },
                    { material: 16, amount: 1 }
                ],
                previous: 3,
                upgrade: [5]
            },
            {
                id: 5,
                name: EquipmentTree.bone,
                rarity: 3,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 17, amount: 2 },
                    { material: 18, amount: 2 }
                ],
                previous: 4,
                upgrade: undefined
            },
            // Great Jagras
            {
                id: 6,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 20, amount: 1 },
                    { material: 41, amount: 3 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 }
                ],
                previous: 3,
                upgrade: [7]
            },
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 41, amount: 2 },
                    { material: 43, amount: 2 },
                    { material: 44, amount: 2 }
                ],
                previous: 6,
                upgrade: undefined
            },
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            {
                id: 12,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 65, amount: 3 },
                    { material: 66, amount: 2 },
                    { material: 68, amount: 1 }
                ],
                previous: 3,
                upgrade: [13]
            },
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 65, amount: 2 },
                    { material: 66, amount: 2 },
                    { material: 68, amount: 2 }
                ],
                previous: 12,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 14,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 1 }
                ],
                previous: 0,
                upgrade: [15]
            },
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 10, amount: 3 },
                    { material: 23, amount: 2 },
                    { material: 49, amount: 2 },
                    { material: 51, amount: 2 }
                ],
                previous: 14,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            {
                id: 16,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 75, amount: 3 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 0,
                upgrade: [17]
            },
            {
                id: 17,
                name: EquipmentTree.tzitziYaKu,
                rarity: 4,
                materials: [
                    { material: 7, amount: 1 },
                    { material: 75, amount: 5 },
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
                previous: 16,
                upgrade: undefined
            },
            // Great Girros
            undefined, undefined,
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 24,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 25, amount: 2 },
                    { material: 83, amount: 3 },
                    { material: 86, amount: 2 }
                ],
                previous: 0,
                upgrade: [25]
            },
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 26, amount: 1 },
                    { material: 84, amount: 4 },
                    { material: 85, amount: 2 }
                ],
                previous: 24,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 30,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 16, amount: 2 },
                    { material: 104, amount: 4 },
                    { material: 107, amount: 2 },
                    { material: 108, amount: 1 }
                ],
                previous: 3,
                upgrade: [31]
            },
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 105, amount: 3 },
                    { material: 106, amount: 3 },
                    { material: 109, amount: 2 },
                    { material: 110, amount: 1 }
                ],
                previous: 30,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            undefined, undefined,
            // Teostra
            {
                id: 36,
                name: EquipmentTree.teostra,
                rarity: 4,
                materials: [
                    
                    { material: 126, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 131, amount: 1 },
                    { material: 133, amount: 1 }
                ],
                previous: 0,
                upgrade: [37]
            },
            {
                id: 37,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 129, amount: 3 },
                    { material: 131, amount: 2 },
                    { material: 134, amount: 1 }
                ],
                previous: 36,
                upgrade: undefined
            },
            // Nergigante
            {
                id: 38,
                name: EquipmentTree.nergigante,
                rarity: 4,
                materials: [
                    
                    { material: 120, amount: 2 },
                    { material: 121, amount: 2 },
                    { material: 123, amount: 1 },
                    { material: 124, amount: 1 }
                ],
                previous: 0,
                upgrade: [39]
            },
            {
                id: 39,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 122, amount: 4 },
                    { material: 123, amount: 3 },
                    { material: 125, amount: 2 }
                ],
                previous: 38,
                upgrade: undefined
            },
            // Kirin
            {
                id: 40,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 7, amount: 1 },
                    { material: 114, amount: 3 },
                    { material: 115, amount: 1 },
                    { material: 117, amount: 3 }
                ],
                previous: 3,
                upgrade: [41]
            },
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 6, amount: 2 },
                    { material: 114, amount: 2 },
                    { material: 116, amount: 2 },
                    { material: 118, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ]
]);