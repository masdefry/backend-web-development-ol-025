/*
  Warnings:

  - Added the required column `phoneNumber` to the `staffs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "staffs" ADD COLUMN     "phoneNumber" VARCHAR(15) NOT NULL;
