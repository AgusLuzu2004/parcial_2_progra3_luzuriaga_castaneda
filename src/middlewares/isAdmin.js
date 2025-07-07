export const isAdmin = (req, res, next) => {
    if (req.session.admin) {
        return next();
    }
    return res.redirect('/api/admin');
};