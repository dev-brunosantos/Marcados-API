-- AlterTable
ALTER TABLE "Escalas" ALTER COLUMN "bateria" SET NOT NULL,
ALTER COLUMN "bateria" SET DATA TYPE TEXT,
ALTER COLUMN "dt_culto" DROP NOT NULL;