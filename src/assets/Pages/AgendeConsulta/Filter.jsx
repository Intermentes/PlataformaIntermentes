import React, { useState } from "react";
import Styles from "./Filter.module.css";
import downArrow from "../../Images/EncontrePsicoImg/seta-baixo.png";
import lupa from "../../Images/EncontrePsicoImg/lupa.png";
import specialistIcon from "../../Images/EncontrePsicoImg/perfil.png";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className={Styles.Checkbox}>
      <div
        className={`${Styles.CheckboxInner} ${checked ? Styles.Checked : ""}`}
        onClick={onChange}
      >
        {checked && <span className={Styles.CheckMark}>&#10003;</span>}
      </div>
      <label className={Styles.CheckboxLabel}>{label}</label>
    </div>
  );
};

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [minValue, setMinValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (value) => {
    const currentIndex = selectedCheckboxes.indexOf(value);
    const newChecked = [...selectedCheckboxes];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedCheckboxes(newChecked);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filterCriteria = {
      specialist: selectedOption,
      gender: selectedCheckboxes,
      time: selectedTime,
      minValue: minValue,
    };
    console.log(filterCriteria);
    handleModalClose();
  };

  return (
    <div className={Styles.FilterContainer}>
      <button
        type="button"
        onClick={handleModalOpen}
        className={Styles.OpenModalButton}
      >
        <img className={Styles.lupa} src={lupa} alt="lupa" />
      </button>

      {showModal && (
        <div className={Styles.Modal}>
          <div className={Styles.ModalContent}>
            <span
              className={Styles.CloseModalButton}
              onClick={handleModalClose}
            >
              &times;
            </span>
            <h2 className={Styles.ModalTitle}>Filtrar por:</h2>
            <div className={Styles.FilterOptions}>
              <div className={Styles.FilterSection}>
                <h3>Que tipo de especialistaestá buscando para sua consulta</h3>
                <div className={Styles.SelectContainer}>
                  <label htmlFor="specialistSelect">
                    <img
                      src={specialistIcon}
                      alt="Ícone de Especialista"
                      className={Styles.SpecialistIcon}
                    />
                  </label>
                  <div className={Styles.SelectWrapper}>
                    <select
                      id="specialistSelect"
                      value={selectedOption}
                      onChange={handleDropdownChange}
                    >
                      <option value="" disabled hidden>
                        --Especialista--
                      </option>
                      <option value="Cardiologista">Psico-Oncologia</option>
                      <option value="Dentista">Violência</option>
                      <option value="Psicólogo">LGBTQIAP+</option>
                    </select>
                    <img
                      src={downArrow}
                      alt="Seta para baixo"
                      className={Styles.DownArrow}
                    />
                  </div>
                </div>
              </div>

              <div className={Styles.FilterSection}>
                <h3>Prefere um Especialista de algum gênero em particular?</h3>
                <div className={Styles.CheckboxGroup}>
                  <Checkbox
                    label="Homem cis"
                    checked={selectedCheckboxes.includes("Homem cis")}
                    onChange={() =>
                      handleCheckboxChange("Homem cis")
                    }
                  />
                  <Checkbox
                    label="Mulher cis"
                    checked={selectedCheckboxes.includes("Mulher cis")}
                    onChange={() =>
                      handleCheckboxChange("Mulher cis")
                    }
                  />
                  <Checkbox
                    label="Transgênero"
                    checked={selectedCheckboxes.includes("Transgênero")}
                    onChange={() =>
                      handleCheckboxChange("Transgênero")
                    }
                  />
                  <Checkbox
                    label="Não tenho preferência"
                    checked={selectedCheckboxes.includes(
                      "Não tenho preferência"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Não tenho preferência")
                    }
                  />
                </div>
              </div>

              <div className={Styles.FilterSection}>
                <h3>Tem preferência pela Etnia do profissional?</h3>
                <div className={Styles.CheckboxGroup}>
                  <Checkbox
                    label="Branco"
                    checked={selectedCheckboxes.includes("Branco")}
                    onChange={() =>
                      handleCheckboxChange("Branco")
                    }
                  />
                  <Checkbox
                    label="Preto"
                    checked={selectedCheckboxes.includes("Preto")}
                    onChange={() =>
                      handleCheckboxChange("Preto")
                    }
                  />
                  <Checkbox
                    label="Pardo"
                    checked={selectedCheckboxes.includes("Pardo")}
                    onChange={() =>
                      handleCheckboxChange("Pardo")
                    }
                  />
                  <Checkbox
                    label="Amarelo"
                    checked={selectedCheckboxes.includes("Amarelo")}
                    onChange={() =>
                      handleCheckboxChange("Amarelo")
                    }
                  />
                  <Checkbox
                    label="Indígena"
                    checked={selectedCheckboxes.includes("Indígena")}
                    onChange={() =>
                      handleCheckboxChange("Indígena")
                    }
                  />
                  <Checkbox
                    label="Não tenho preferência"
                    checked={selectedCheckboxes.includes(
                      "Não tenho preferência"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Não tenho preferência")
                    }
                  />
                </div>
              </div>

              <div className={Styles.FilterSection}>
                <h3>Tem algum horário de preferência?</h3>
                <div className={Styles.InputContainer}>
                  <input
                    type="time"
                    id="timeSelect"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className={Styles.Input}
                  />
                </div>
              </div>

              <div className={Styles.FilterSection}>
                <h3>4. Tem preferência de valor?</h3>
                <div className={Styles.InputContainer}>
                  <input
                    type="text"
                    id="minValueInput"
                    value={minValue}
                    onChange={(e) => setMinValue(e.target.value)}
                    placeholder="Digite o valor mínimo: R$0,00"
                    className={Styles.Input}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className={Styles.FilterButton}
            >
              Filtrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;