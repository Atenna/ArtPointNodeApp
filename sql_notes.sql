
DELIMITER //
CREATE PROCEDURE GetPoiByType(IN in_type_array VARCHAR(40))
	BEGIN
		SET @sql = CONCAT('SELECT * FROM points_of_interest WHERE type in (', in_type_array, ')');
		PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END;
 DELIMITER ;
 
 
SET @type = '1, 2, 4, 5';
CALL GetPoiByType(@type); 
