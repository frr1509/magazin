export const getCategorys = async () =>
    fetch(`http://localhost:3005/categorys`).then((loadedCategorys) =>
        loadedCategorys.json(),
    );
