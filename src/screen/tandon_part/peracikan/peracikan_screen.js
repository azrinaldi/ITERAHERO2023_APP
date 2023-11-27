import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styles from "./peracikan_style";
import stylesGlobal from "../../../utils/style_global";

const PeracikanScreen = (props) => {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [showRacikButton, setShowRacikButton] = useState(true);

  const formulas = [
    { nama: "Formula 1", ppm: "100", ph: "7", volume: "10" },
    { nama: "Formula 2", ppm: "200", ph: "6", volume: "20" },
    { nama: "Formula 3", ppm: "150", ph: "8", volume: "15" },
  ];

  const formulaOptions = [...formulas.map((formula) => formula.nama), "Tambah Daftar"];

  const handleDropdownChange = (value) => {
    if (value === "Tambah Daftar") {
      setShowRacikButton(false);
      setSelectedFormula(null);
    } else {
      const selectedData = formulas.find((formula) => formula.nama === value);
      setSelectedFormula(selectedData);
      setShowRacikButton(true);
    }
  };

  const handleTambahDaftar = () => {
    setShowRacikButton(false);
    setSelectedFormula(null);
  };

  const handleSimpan = () => {
    // Logika untuk menyimpan data
    // Ganti dengan logika sesuai kebutuhan aplikasi
  };

  const handleRacik = () => {
    // Logika untuk meracik formula
    // Ganti dengan logika sesuai kebutuhan aplikasi
  };

  return (
    <View>
      <SelectDropdown
        data={formulaOptions}
        onSelect={(selectedItem, index) => handleDropdownChange(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
      />
      {selectedFormula && (
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              value={selectedFormula.nama}
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>PH</Text>
            <TextInput
              style={styles.input}
              value={selectedFormula.ph}
              keyboardType="numeric"
              onChangeText={(text) => setSelectedFormula({ ...selectedFormula, ph: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>PPM</Text>
            <TextInput
              style={styles.input}
              value={selectedFormula.ppm}
              keyboardType="numeric"
              onChangeText={(text) => setSelectedFormula({ ...selectedFormula, ppm: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Volume</Text>
            <TextInput
              style={styles.input}
              value={selectedFormula.volume}
              keyboardType="numeric"
              onChangeText={(text) => setSelectedFormula({ ...selectedFormula, volume: text })}
            />
          </View>
          <View style={styles.buttonContainer}>
            {showRacikButton && (
              <Button style={[styles.button50, styles.buttonLarge]} color="#09322D" title="Racik" onPress={handleRacik} />
            )}
            <Button
              style={[showRacikButton ? styles.button50 : styles.buttonFull, styles.buttonLarge]}
              color="#09322D"
              title="Simpan"
              onPress={handleSimpan}
            />
          </View>
        </View>
      )}
      {!selectedFormula && (
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama"
              onChangeText={(text) => setSelectedFormula({ ...selectedFormula, nama: text })}
            />
          </View>
          <Button
            style={[styles.buttonFull, styles.buttonLarge]}
            color="#09322D"
            title="Simpan"
            onPress={handleSimpan}
          />
        </View>
      )}
    </View>
  );
};

export default PeracikanScreen;
