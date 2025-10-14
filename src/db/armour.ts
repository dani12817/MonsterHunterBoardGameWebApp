import { ArmourLocal } from "../app/models";
import { ArmourType, EquipmentTree, WeaponType } from "../app/shared/enums";

export const ARMOUR_TABLE: Map<ArmourType, ArmourLocal[]> = new Map([
    [
        ArmourType.helm, 
        [
            // Base
            {
                id: 0,
                name: EquipmentTree.leather,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            {
                id: 1,
                name: EquipmentTree.chainmail,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            // Mineral
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 1, amount: 2 },
                    { material: 2, amount: 1 },
                    { material: 3, amount: 1 }
                ],
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 2 },
                    { material: 15, amount: 2 }
                ],
            },
            // Great Jagras
            {
                id: 4,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 },
                    { material: 45, amount: 1 }
                ],
            },
            // Barroth
            {
                id: 5,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 1 },
                    { material: 58, amount: 1 },
                    { material: 59, amount: 1 },
                    { material: 60, amount: 1 }
                ],
            },
            // Kulu-Ya-Ku
            {
                id: 6,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 46, amount: 1 },
                    { material: 47, amount: 1 },
                    { material: 48, amount: 1 }
                ],
            },
            // Tobi-Kadachi
            {
                id: 7,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 32, amount: 1 },
                    { material: 67, amount: 1 },
                    { material: 69, amount: 1 }
                ],
            },
            // Pukei Pukei
            {
                id: 8,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 51, amount: 1 },
                    { material: 53, amount: 1 },
                    { material: 55, amount: 1 }
                ],
            },
            // Tzitzi-Ya-Ku
            {
                id: 9,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 6, amount: 1 },
                    { material: 76, amount: 1 },
                    { material: 77, amount: 2 }
                ],
            },
            // Great Girros
            {
                id: 10,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 81, amount: 1 }
                ],
            },
            // Anjanath
            {
                id: 11,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 71, amount: 1 },
                    { material: 72, amount: 1 },
                    { material: 75, amount: 1 }
                ],
            },
            // Jyuratodus
            {
                id: 12,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 38, amount: 1 },
                    { material: 61, amount: 1 },
                    { material: 63, amount: 1 },
                    { material: 65, amount: 1 }
                ],
            },
            // Radobaan
            {
                id: 13,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 86, amount: 2 },
                    { material: 87, amount: 1 }
                ],
            },
            // Rathalos
            {
                id: 14,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 88, amount: 1 },
                    { material: 89, amount: 1 },
                    { material: 95, amount: 1 }
                ],
            },
            // Azure Rathalos
            {
                id: 15,
                name: EquipmentTree.rathalosAzure,
                rarity: 4,
                materials: [
                    { material: 98, amount: 1 },
                    { material: 99, amount: 1 },
                    { material: 103, amount: 1 }
                ],
            },
            // Diablos
            {
                id: 16,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 35, amount: 2 },
                    { material: 107, amount: 1 },
                    { material: 108, amount: 2 },
                    { material: 110, amount: 1 }
                ],
            },
            // Black Diablos
            {
                id: 17,
                name: EquipmentTree.diablosBlack,
                rarity: 4,
                materials: [
                    { material: 9, amount: 2 },
                    { material: 110, amount: 1 },
                    { material: 113, amount: 2 },
                    { material: 114, amount: 1 }
                ],
            },
            // Kushala Daora
            {
                id: 18,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 20, amount: 2 },
                    { material: 136, amount: 1 },
                    { material: 137, amount: 2 },
                    { material: 138, amount: 1 }
                ],
            },
            // Teostra
            {
                id: 19,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 10, amount: 2 },
                    { material: 127, amount: 1 },
                    { material: 129, amount: 1 },
                    { material: 130, amount: 1 }
                ],
            },
            // Nergigante
            {
                id: 20,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 120, amount: 2 },
                    { material: 121, amount: 1 },
                    { material: 123, amount: 1 },
                    { material: 126, amount: 1 }
                ],
            },
            // Kirin
            {
                id: 21,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 8, amount: 1 },
                    { material: 115, amount: 2 },
                    { material: 116, amount: 2 }
                ],
            }
        ]
    ],
    [
        ArmourType.chest, 
        [
            // Base
            {
                id: 0,
                name: EquipmentTree.leather,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            {
                id: 1,
                name: EquipmentTree.chainmail,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            // Mineral
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 1, amount: 1 },
                    { material: 2, amount: 1 },
                    { material: 3, amount: 2 }
                ],
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 }
                ],
            },
            // Great Jagras
            {
                id: 4,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 15, amount: 1 },
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 }
                ],
            },
            // Barroth
            {
                id: 5,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 11, amount: 2 },
                    { material: 57, amount: 1 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 1 }
                ],
            },
            // Kulu-Ya-Ku
            {
                id: 6,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 34, amount: 1 },
                    { material: 47, amount: 2 },
                    { material: 48, amount: 1 },
                    { material: 49, amount: 1 }
                ],
            },
            // Tobi-Kadachi
            {
                id: 7,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 39, amount: 1 },
                    { material: 67, amount: 1 },
                    { material: 68, amount: 1 },
                    { material: 70, amount: 2 }
                ],
            },
            // Pukei Pukei
            {
                id: 8,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 3, amount: 3 },
                    { material: 50, amount: 2 },
                    { material: 51, amount: 1 }
                ],
            },
            // Tzitzi-Ya-Ku
            {
                id: 9,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 8, amount: 1 },
                    { material: 77, amount: 1 },
                    { material: 78, amount: 1 },
                    { material: 79, amount: 1 }
                ],
            },
            // Great Girros
            {
                id: 10,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 25, amount: 1 },
                    { material: 81, amount: 2 },
                    { material: 83, amount: 1 }
                ],
            },
            // Anjanath
            {
                id: 11,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 72, amount: 1 },
                    { material: 73, amount: 1 },
                    { material: 74, amount: 1 }
                ],
            },
            // Jyuratodus
            {
                id: 12,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 31, amount: 2 },
                    { material: 61, amount: 1 },
                    { material: 64, amount: 1 },
                    { material: 65, amount: 1 }
                ],
            },
            // Radobaan
            {
                id: 13,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 1 },
                    { material: 86, amount: 1 }
                ],
            },
            // Rathalos
            {
                id: 14,
                name: EquipmentTree.rathalos,
                rarity: 1,
                materials: [
                    { material: 88, amount: 1 },
                    { material: 91, amount: 1 },
                    { material: 97, amount: 1 }
                ],
            },
            // Azure Rathalos
            {
                id: 15,
                name: EquipmentTree.rathalosAzure,
                rarity: 4,
                materials: [
                    { material: 98, amount: 1 },
                    { material: 101, amount: 2 },
                    { material: 104, amount: 1 }
                ],
            },
            // Diablos
            {
                id: 16,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 8, amount: 2 },
                    { material: 106, amount: 2 },
                    { material: 107, amount: 1 },
                    { material: 110, amount: 1 }
                ],
            },
            // Black Diablos
            {
                id: 17,
                name: EquipmentTree.diablosBlack,
                rarity: 4,
                materials: [
                    { material: 111, amount: 1 },
                    { material: 112, amount: 1 },
                    { material: 114, amount: 2 }
                ],
            },
            // Kushala Daora
            {
                id: 18,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 136, amount: 1 },
                    { material: 139, amount: 1 },
                    { material: 141, amount: 1 },
                    { material: 142, amount: 1 }
                ],
            },
            // Teostra
            {
                id: 19,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 97, amount: 1 },
                    { material: 133, amount: 2 },
                    { material: 134, amount: 2 }
                ],
            },
            // Nergigante
            {
                id: 20,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 20, amount: 2 },
                    { material: 120, amount: 2 },
                    { material: 124, amount: 2 }
                ],
            },
            // Kirin
            {
                id: 21,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 14, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 }
                ],
            }
        ]
    ],
    [
        ArmourType.leg, 
        [
            // Base
            {
                id: 0,
                name: EquipmentTree.leather,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            {
                id: 1,
                name: EquipmentTree.chainmail,
                base: true,
                rarity: 1,
                materials: undefined,
            },
            // Mineral
            {
                id: 2,
                name: EquipmentTree.mineral,
                rarity: 2,
                materials: [
                    { material: 1, amount: 1 },
                    { material: 2, amount: 1 },
                    { material: 3, amount: 2 }
                ],
            },
            // Bone
            {
                id: 3,
                name: EquipmentTree.bone,
                rarity: 2,
                materials: [
                    { material: 12, amount: 1 },
                    { material: 15, amount: 1 }
                ],
            },
            // Great Jagras
            {
                id: 4,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 42, amount: 1 },
                    { material: 43, amount: 1 },
                    { material: 45, amount: 1 }
                ],
            },
            // Barroth
            {
                id: 5,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 18, amount: 1 },
                    { material: 57, amount: 2 },
                    { material: 58, amount: 1 },
                    { material: 60, amount: 1 }
                ],
            },
            // Kulu-Ya-Ku
            {
                id: 6,
                name: EquipmentTree.kuluYaKu,
                rarity: 3,
                materials: [
                    { material: 5, amount: 1 },
                    { material: 39, amount: 3 },
                    { material: 46, amount: 2 },
                    { material: 47, amount: 1 }
                ],
            },
            // Tobi-Kadachi
            {
                id: 7,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 37, amount: 1 },
                    { material: 66, amount: 2 },
                    { material: 67, amount: 1 }
                ],
            },
            // Pukei Pukei
            {
                id: 8,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 18, amount: 1 },
                    { material: 50, amount: 1 },
                    { material: 51, amount: 2 },
                    { material: 54, amount: 2 }
                ],
            },
            // Tzitzi-Ya-Ku
            {
                id: 9,
                name: EquipmentTree.tzitziYaKu,
                rarity: 3,
                materials: [
                    { material: 77, amount: 2 },
                    { material: 78, amount: 1 }
                ],
            },
            // Great Girros
            {
                id: 10,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 16, amount: 1 },
                    { material: 81, amount: 2 },
                    { material: 82, amount: 1 }
                ],
            },
            // Anjanath
            {
                id: 11,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 1, amount: 1 },
                    { material: 28, amount: 1 },
                    { material: 71, amount: 1 },
                    { material: 72, amount: 1 }
                ],
            },
            // Jyuratodus
            {
                id: 12,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 35, amount: 1 },
                    { material: 63, amount: 1 },
                    { material: 64, amount: 1 },
                    { material: 65, amount: 1 }
                ],
            },
            // Radobaan
            {
                id: 13,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 84, amount: 1 },
                    { material: 87, amount: 2 }
                ],
            },
            // Rathalos
            {
                id: 14,
                name: EquipmentTree.rathalos,
                rarity: 4,
                materials: [
                    { material: 89, amount: 1 },
                    { material: 93, amount: 1 },
                    { material: 94, amount: 1 }
                ],
            },
            // Azure Rathalos
            {
                id: 15,
                name: EquipmentTree.rathalosAzure,
                rarity: 4,
                materials: [
                    { material: 99, amount: 1 },
                    { material: 100, amount: 1 },
                    { material: 102, amount: 2 }
                ],
            },
            // Diablos
            {
                id: 16,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 1 },
                    { material: 107, amount: 1 },
                    { material: 111, amount: 1 }
                ],
            },
            // Black Diablos
            {
                id: 17,
                name: EquipmentTree.diablosBlack,
                rarity: 4,
                materials: [
                    { material: 35, amount: 1 },
                    { material: 112, amount: 2 },
                    { material: 113, amount: 1 },
                    { material: 114, amount: 1 }
                ],
            },
            // Kushala Daora
            {
                id: 18,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 36, amount: 2 },
                    { material: 136, amount: 1 },
                    { material: 137, amount: 1 },
                    { material: 138, amount: 2 }
                ],
            },
            // Teostra
            {
                id: 19,
                name: EquipmentTree.teostra,
                rarity: 5,
                materials: [
                    { material: 128, amount: 1 },
                    { material: 131, amount: 2 }
                ],
            },
            // Nergigante
            {
                id: 20,
                name: EquipmentTree.nergigante,
                rarity: 5,
                materials: [
                    { material: 36, amount: 2 },
                    { material: 120, amount: 1 },
                    { material: 121, amount: 1 },
                    { material: 125, amount: 2 }
                ],
            },
            // Kirin
            {
                id: 21,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 115, amount: 2 },
                    { material: 118, amount: 2 }
                ],
            }
        ]
    ]
]);

export const BASE_ARMOUR_TABLE: Map<WeaponType, EquipmentTree> = new Map([
    [ WeaponType.greatsword, EquipmentTree.chainmail ],
    [ WeaponType.swordShield, EquipmentTree.leather ],
    [ WeaponType.dualBlades, EquipmentTree.leather ],
    [ WeaponType.longsword, EquipmentTree.chainmail ],
    [ WeaponType.hammer, EquipmentTree.leather ],
    [ WeaponType.huntingHorn, EquipmentTree.leather ],
    [ WeaponType.lance, EquipmentTree.chainmail ],
    [ WeaponType.gunlance, EquipmentTree.chainmail ],
    [ WeaponType.switchAxe, EquipmentTree.chainmail ],
    [ WeaponType.chargeBlade, EquipmentTree.leather ],
    [ WeaponType.insectGlaive, EquipmentTree.chainmail ],
    [ WeaponType.bow, EquipmentTree.chainmail ],
    [ WeaponType.lightBowgun, EquipmentTree.leather ],
    [ WeaponType.heavyBowgun, EquipmentTree.leather ],
]);

export const BASE_ARMOUR_PER_TYPE: Map<WeaponType, number> = new Map([
    [ WeaponType.greatsword, 1 ],
    [ WeaponType.swordShield, 0 ],
    [ WeaponType.dualBlades, 0 ],
    [ WeaponType.longsword, 1 ],
    [ WeaponType.hammer, 0 ],
    [ WeaponType.huntingHorn, 0 ],
    [ WeaponType.lance, 1 ],
    [ WeaponType.gunlance, 1 ],
    [ WeaponType.switchAxe, 1 ],
    [ WeaponType.chargeBlade, 0 ],
    [ WeaponType.insectGlaive, 1 ],
    [ WeaponType.bow, 1 ],
    [ WeaponType.lightBowgun, 0 ],
    [ WeaponType.heavyBowgun, 0 ],
]);