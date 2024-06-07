import React, { useState } from "react";
import Styles from './Filter.module.css';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCheckboxes((prev) =>
      checked ? [...prev, value] : prev.filter((option) => option !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filterCriteria = {
      specialist: selectedOption,
      etnia: selectedCheckboxes,
    };
    console.log(filterCriteria);
  };

  return (
    <div className={Styles.FilterForm}>
      <form>
        <label htmlFor="especialidade" className={Styles.TituloFiltro}>
          Que tipo de especialista está buscando para sua consulta?
        </label>
        <select
          id={Styles.Especialidade}
          name="especialidade"
          value={selectedOption}
          onChange={handleDropdownChange}>
          <option value="" disabled hidden>
            Selecione a especialidade
          </option>
          <option value="Não especificado">Não especificar</option>
          <option value="teste1">teste 1</option>
          <option value="teste2">teste 2</option>
          <option value="teste3">teste 3</option>
          <option value="teste4">teste 4</option>
          <option value="teste5">teste 5</option>
          <option value="teste6">teste 6</option>
          <option value="teste7">teste 7</option>
        </select>
        <br />
        <br />

        <label className={Styles.TituloFiltro}>Gênero do profissional</label>
        <br />
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.HomemCis}
            name="Genero"
            value="HomemCis"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.HomemCis} className={Styles.CheckboxLabel}>
            Homem cis
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.MulherCis}
            name="Genero"
            value="MulherCis"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.MulherCis} className={Styles.CheckboxLabel}>
            Mulher cis
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Trans}
            name="Genero"
            value="Trans"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Trans} className={Styles.CheckboxLabel}>
            Transgênero
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.SemPreferenciaGenero}
            name="Genero"
            value="Não tenho preferência"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.SemPreferenciaGenero} className={Styles.CheckboxLabel}>
            Não tenho preferência
          </label>
        </div>

        <br />
        <br />

        <label className={Styles.TituloFiltro}>Etnia do profissional</label>
        <br />
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Branco}
            name="etnia"
            value="Branco"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Branco} className={Styles.CheckboxLabel}>
            Branco
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Preto}
            name="etnia"
            value="Preto"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Preto} className={Styles.CheckboxLabel}>
            Preto
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Pardo}
            name="etnia"
            value="Pardo"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Pardo} className={Styles.CheckboxLabel}>
            Pardo
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Amarelo}
            name="etnia"
            value="Amarelo"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Amarelo} className={Styles.CheckboxLabel}>
            Amarelo
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.Indigena}
            name="etnia"
            value="Indígena"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.Indigena} className={Styles.CheckboxLabel}>
            Indígena
          </label>
        </div>
        <div className={Styles.CheckboxGroup}>
          <input
            type="checkbox"
            id={Styles.SemPreferenciaEtnia}
            name="etnia"
            value="Não tenho preferência"
            onChange={handleCheckboxChange}
          />
          <label htmlFor={Styles.SemPreferenciaEtnia} className={Styles.CheckboxLabel}>
            Não tenho preferência
          </label>
        </div>
      </form>
      <button className={Styles.FilterButton} onClick={handleSubmit}>
        Filtrar
      </button>
    </div>
  );
};

export default Filter;
