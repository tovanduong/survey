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



export function postQuestion(data) {
    return axiosClient.post('/question', {
        name: data.name,
        category: data.category,
        difficulty: data.difficult,
        answers: data.answer
    }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function getQuestion() {
    return axiosClient.get('/question')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function getIdQuestion(id) {
    return axiosClient.get(`/question/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function delQuestion(id) {
    return axiosClient.delete(`/question/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function EditQuestion(id, { value }) {
    return axiosClient.patch(`/question/${id}`, {
        name: value.name
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}



export function postSurvey(data) {
    console.log(data)
    return axiosClient.post('/survey', {
        name: data.name,
        category: data.category,
        difficulty: data.difficulty,
        questions: data.questions
    }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function getSurvey() {
    return axiosClient.get('/survey')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function delSurvey(id) {
    return axiosClient.delete(`/survey/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}

export function EditSurvey(id, { value }) {
    return axiosClient.patch(`/survey/${id}`, {
        name: value.name
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}
