import { useEffect, useState } from "react";
import {
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  AttendanceHistoryContainer,
  Header,
  GridContainer,
  PaginationContainer,
  ClockContent,
  Status,
  StatusContent,
  StatusContainer,
  FiltersContainer,
  Card,
  FilterControl,
} from "./AttendanceHistory.styles";
import { Attendance } from "../../types/attendance";
import { HiOutlineClock } from "react-icons/hi";
import { RiFilterLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";

const AttendanceHistory = () => {
  const [attendanceData, setAttendanceData] = useState<Attendance[]>([]);
  const [filteredData, setFilteredData] = useState<Attendance[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("recent");
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchAttendanceData = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data: { id: number; title: string; body: string }[] =
          await response.json();

        const formattedData: Attendance[] = data
          .slice(0, 18)
          .map((item, index) => ({
            id: item.id,
            title: `March ${String(index + 1).padStart(2, "0")}, 2023`,
            status:
              index % 3 === 0 ? "onTime" : index % 3 === 1 ? "late" : "absent",
            body: "Details of the meeting",
          }));

        setAttendanceData(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchAttendanceData();
  }, []);

  useEffect(() => {
    let updatedData = [...attendanceData];

    if (filterStatus !== "Todos") {
      updatedData = updatedData.filter((item) => item.status === filterStatus);
    }

    updatedData.sort((a, b) => {
      return sortOrder === "recent" ? b.id - a.id : a.id - b.id;
    });

    setFilteredData(updatedData);
    setCurrentPage(1);
  }, [filterStatus, sortOrder, attendanceData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <AttendanceHistoryContainer>
      <Header>Attendance History</Header>

      <FiltersContainer>
        <FilterControl size="small">
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="Todos">
              <RiFilterLine />
              Todos
            </MenuItem>
            <MenuItem value="onTime">
              <RiFilterLine />
              On Time
            </MenuItem>
            <MenuItem value="late">
              <RiFilterLine />
              Late
            </MenuItem>
            <MenuItem value="absent">
              <RiFilterLine />
              Absent
            </MenuItem>
          </Select>
        </FilterControl>

        <FilterControl size="small">
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="recent">
              <TbArrowsSort />
              Mais Recente
            </MenuItem>
            <MenuItem value="oldest">
              <TbArrowsSort />
              Mais Antiga
            </MenuItem>
          </Select>
        </FilterControl>
      </FiltersContainer>

      {filteredData.length > 0 ? (
        <>
          <GridContainer>
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Card status={item.status}>
                  <ClockContent>
                    <HiOutlineClock />
                    <div>{item.title}</div>
                    <Status className={`status ${item.status}`}>
                      {item.status}
                    </Status>
                  </ClockContent>
                  <StatusContainer>
                    <StatusContent>
                      <div>Check In Time</div>
                      <p>08:30</p>
                    </StatusContent>
                    <StatusContent>
                      <div>Check Out Time</div>
                      <p>17:00</p>
                    </StatusContent>
                  </StatusContainer>
                </Card>
              </motion.div>
            ))}
          </GridContainer>

          <PaginationContainer>
            <Pagination
              count={Math.ceil(filteredData.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </PaginationContainer>
        </>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </AttendanceHistoryContainer>
  );
};

export default AttendanceHistory;