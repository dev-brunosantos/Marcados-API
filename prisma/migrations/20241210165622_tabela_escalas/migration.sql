-- CreateTable
CREATE TABLE "Escalas" (
    "id" SERIAL NOT NULL,
    "ministro" TEXT NOT NULL,
    "soprano" TEXT[],
    "contralto" TEXT[],
    "tenor" TEXT[],
    "teclado" TEXT[],
    "violao" TEXT NOT NULL,
    "guitarra" TEXT NOT NULL,
    "baixo" TEXT NOT NULL,
    "bateria" TEXT[],
    "dt_culto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Escalas_pkey" PRIMARY KEY ("id")
);
