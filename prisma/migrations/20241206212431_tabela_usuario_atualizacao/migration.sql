/*
  Warnings:

  - Added the required column `sobrenome` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "sobrenome" TEXT NOT NULL;
