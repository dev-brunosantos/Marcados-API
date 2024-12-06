/*
  Warnings:

  - You are about to drop the `Instrumentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vozes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Instrumentos";

-- DropTable
DROP TABLE "Vozes";

-- CreateTable
CREATE TABLE "Naipes" (
    "id" SERIAL NOT NULL,
    "naipe" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Naipes_pkey" PRIMARY KEY ("id")
);
