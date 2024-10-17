/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `Instrumentos` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Vozes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Instrumentos" DROP CONSTRAINT "Instrumentos_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Vozes" DROP CONSTRAINT "Vozes_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Instrumentos" DROP COLUMN "id_usuario";

-- AlterTable
ALTER TABLE "Vozes" DROP COLUMN "id_usuario";
