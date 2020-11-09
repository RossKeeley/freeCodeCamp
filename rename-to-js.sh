for file in *.txt; do
    mv "$file" "$(basename "$file" .txt).js"
done
