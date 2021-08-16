import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useInput } from "../../hooks";

import { NavTabs } from "../../shared/navTabs/NavTabs";
import { Button } from "../../shared/button/Button";
import { Input } from "../../shared/input/Input";

import "./CreateTask.scss";

export const CreateTask = () => {
  const header = useInput("", { isEmpty: true, minLength: 4, maxLength: 70 });
  const urls = useInput("", { isEmpty: true });
  const category = useState();
  const [descState, setDescState] = useState(EditorState.createEmpty());
  const typeReport = useState();
  const [reportState, setReportState] = useState(EditorState.createEmpty());
  const payment = useInput(0, { isEmpty: true });
  const [price, setPrice] = useState(0);

  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  const handlerOnSubmit = (e) => {};

  // useEffect(() => {
  //   const isValid = username.isValid && password.isValid && confirmPassword.isValid && email.isValid
  //   isValid && setFormValid(isValid)
  // }, [username.isValid && password.isValid && confirmPassword.isValid && email.isValid])

  return (
    <div>
      <h1>Create Task</h1>
      <NavTabs>
        <NavLink exact to="/account/adv/tasks">
          Все задания
        </NavLink>
        <NavLink to="/account/adv/tasks/create">Cоздать задание</NavLink>
      </NavTabs>

      <div className="create-task">
        <form className="create-task__form" onSubmit={handlerOnSubmit}>
          <Input
            type="text"
            name="header"
            placeholder="Название"
            value={header.value}
            onChange={header.onChange}
            errorMsg={header.errors[0]}
            required
          />
          <Input
            type="text"
            name="urls"
            placeholder="Ссылки"
            value={urls.value}
            onChange={urls.onChange}
            errorMsg={urls.errors[0]}
            required
          />

          <select>
            <option>Ничего не выбрано</option>
            <option>Клики</option>
            <option>Регистрация</option>
            <option>Регистрация с активностью</option>
            <option>Cоцсети</option>
            <option>Комментировать/Голосовать</option>
            <option>Игры</option>
            <option>Мобильные приложения</option>
            <option>Прочее</option>
          </select>

          <Editor
            editorState={descState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setDescState}
          />
          <Editor
            editorState={reportState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setReportState}
          />

          <Input
            type="number"
            name="payment"
            placeholder="Оплата исполнителю"
            value={payment.value}
            onChange={payment.onChange}
            errorMsg={payment.errors[0]}
            required
          />

          <div>
            Цена одного выполнения: {price}
          </div>

          <Button
            className="create-task__submit"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Создать задание
          </Button>
        </form>
      </div>
    </div>
  );
};
