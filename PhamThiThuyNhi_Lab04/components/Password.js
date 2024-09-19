import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  CheckBox,
} from "react-native";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";
    if (includeLowercase) characterPool += lowercase;
    if (includeUppercase) characterPool += uppercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (characterPool.length === 0) return;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }

    setGeneratedPassword(newPassword);
  };

  useEffect(() => {
    generatePassword(); // Generate password whenever checkboxes change
  }, [includeLowercase, includeUppercase, includeNumbers, includeSymbols]);

  const handlePasswordLengthChange = (text) => {
    const length = parseInt(text);

    if (!isNaN(length) && length > 0) {
      setPasswordLength(length);
      generatePassword(); // Tạo mật khẩu mới khi độ dài thay đổi
    } else {
      setPasswordLength(12); // Đặt lại về giá trị mặc định
      generatePassword(); // Tạo mật khẩu mới với độ dài mặc định
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>

        <TextInput style={styles.input} value={generatedPassword} />
        <View style={styles.optionContainer}>
          <Text style={styles.passwordLength}>Password Length:</Text>
          <Text style={styles.password}> {generatedPassword.length}</Text>
        </View>

        <View style={styles.optionContainer}>
          <Text>Include lowercase letters</Text>
          <CheckBox
            value={includeLowercase}
            onValueChange={(newValue) => {
              setIncludeLowercase(newValue);
            }}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text>Include uppercase letters</Text>
          <CheckBox
            value={includeUppercase}
            onValueChange={(newValue) => {
              setIncludeUppercase(newValue);
            }}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text>Include numbers</Text>
          <CheckBox
            value={includeNumbers}
            onValueChange={(newValue) => {
              setIncludeNumbers(newValue);
            }}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text>Include special symbols</Text>
          <CheckBox
            value={includeSymbols}
            onValueChange={(newValue) => {
              setIncludeSymbols(newValue);
            }}
          />
        </View>

        <Button title="GENERATE PASSWORD" onPress={generatePassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9797c2",
  },
  main: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2c54",
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "white",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 5,
    color: "white",
  },
  password: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  passwordLength: {
    color: "white",
    marginTop: 10,
  },
});

export default PasswordGenerator;
