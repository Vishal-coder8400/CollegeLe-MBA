COMPONENTS_DIR=./components

create-folder:
	@read -p "Enter folder name: " folder_name; \
	mkdir -p $(COMPONENTS_DIR)/$$folder_name; \
	touch $(COMPONENTS_DIR)/$$folder_name/$$folder_name.tsx $(COMPONENTS_DIR)/$$folder_name/$$folder_name.module.css $(COMPONENTS_DIR)/$$folder_name/index.ts; \
	echo "Folder '$(COMPONENTS_DIR)/$$folder_name' and files created successfully!"