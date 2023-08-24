-- CreateTable
CREATE TABLE `AppConfig` (
    `configId` INTEGER NOT NULL AUTO_INCREMENT,
    `configTitle` VARCHAR(191) NOT NULL,
    `configComent` VARCHAR(191) NULL,
    `configDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `configStatus` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`configId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
