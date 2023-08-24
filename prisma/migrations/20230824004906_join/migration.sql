-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `Status`(`statusId`) ON DELETE RESTRICT ON UPDATE CASCADE;
