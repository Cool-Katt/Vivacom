package com.filer;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.Scanner;

@RestController
public class SendFile {

    private final String SQLCMDCOMMAND = "cmd /c SQLCMD -S PANORAMA2 -d HADOOBY -Q \"SELECT DISTINCT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_CATALOG = 'HADOOBY' AND TABLE_NAME = N'CS_PS_USER_DAILY_202102' OR TABLE_NAME = N'CS_PS_USER_MONTHLY_202102' OR TABLE_NAME = N'CS_PS_NETWORK_DAILY' OR TABLE_NAME = N'CS_PS_NETWORK_MONTHLY' OR TABLE_NAME = N'CS_PS_REGION_L2_DAILY' OR TABLE_NAME = N'CS_PS_REGION_L3_DAILY' OR TABLE_NAME = N'PI_PS_USER_MONTHLY_202102' OR TABLE_NAME = N'PI_USER_MONTHLY_202102' OR TABLE_NAME = N'PI_SMS_VOLTE_VOWIFI_USER_MONTHLY_202102' OR TABLE_NAME = N'PI_VOICE_USER_MONTHLY_202102' OR TABLE_NAME = N'VOLTE_NETWORK_DAILY' OR TABLE_NAME = N'VOLTE_REGION_L2_DAILY' OR TABLE_NAME = N'VOLTE_REGION_L3_DAILY' OR TABLE_NAME = N'VOWIFI_NETWORK_DAILY'\"";

    @GetMapping("/file.txt")
    public ResponseEntity send() throws IOException {
        Scanner scanner = new Scanner(Runtime.getRuntime().exec(SQLCMDCOMMAND).getInputStream()).useDelimiter("$");
        String out = scanner.hasNext() ? scanner.next() : "";
        return ResponseEntity.ok()
                .contentLength(out.length())
                .header("Access-Control-Allow-Origin", "*")
                .header("Content-Disposition", "attachment; filename=dump.txt")
                .body(out.trim());
    }

    @GetMapping("is-alive")
    public String isAlive()
    {
        return "I'm still here. \n do \\file.txt to download dump with table columns.";
    }
}
