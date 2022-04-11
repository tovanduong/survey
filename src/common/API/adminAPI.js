import axiosClient from "./axiosClient";

export function getUser() {
    return axiosClient.get('/user')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function postUser({ username, password }) {
    return axiosClient.post('/user',
        { username, password }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function postCategory({ name }) {
    return axiosClient.post('/category',
        { name }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function getCategory() {
    return axiosClient.get('/category')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function delCategory(id) {
    return axiosClient.delete(`/category/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function EditCategory(id, { value }) {
    return axiosClient.patch(`/category/${id}`, {
        name: value.name
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function postDiff({ name }) {
    return axiosClient.post('/difficulty',
        { name }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function getDiff() {
    return axiosClient.get('/difficulty')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function delDiff(id) {
    return axiosClient.delete(`/difficulty/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function EditDiff(id, { value }) {
    return axiosClient.patch(`/difficulty/${id}`, {
        name: value.name
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function postAnswer({ dataAnswer }) {

    return axiosClient.post('/answer',{
        name: dataAnswer.name,
        isAnswer: dataAnswer.isAnswer
    }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function getAnswer() {
    return axiosClient.get('/answer')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function delAnswer(id) {
    return axiosClient.delete(`/answer/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function EditAnswer(id, { dataAnswer }) {
    return axiosClient.patch(`/answer/${id}`, {
        name: dataAnswer.name,
        isAnswer: dataAnswer.isAnswer
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}