const logErrors = (err, next) => {
    console.log("Ha ocurrido un error");
    console.log(err);
    next(err);
}

const errorHandler = (err, res) => {
    const { message } = err;
    res.status(500).json({ success: false, message });
}

module.exports = { logErrors, errorHandler };